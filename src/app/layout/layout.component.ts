import { DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfig, FuseConfigService } from 'shared/services/config';
import { FuseMediaWatcherService } from 'shared/services/media-watcher';
import { FusePlatformService } from 'shared/services/platform';
import { combineLatest, filter, map, Subject, takeUntil } from 'rxjs';
import { SettingsComponent } from './common/settings/settings.component';
import { EmptyLayoutComponent } from './layouts/empty/empty.component';
import { CenteredLayoutComponent } from './layouts/horizontal/centered/centered.component';
import { EnterpriseLayoutComponent } from './layouts/horizontal/enterprise/enterprise.component';
import { MaterialLayoutComponent } from './layouts/horizontal/material/material.component';
import { ModernLayoutComponent } from './layouts/horizontal/modern/modern.component';
import { ClassicLayoutComponent } from './layouts/vertical/classic/classic.component';
import { ClassyLayoutComponent } from './layouts/vertical/classy/classy.component';
import { CompactLayoutComponent } from './layouts/vertical/compact/compact.component';
import { DenseLayoutComponent } from './layouts/vertical/dense/dense.component';
import { FuturisticLayoutComponent } from './layouts/vertical/futuristic/futuristic.component';
import { ThinLayoutComponent } from './layouts/vertical/thin/thin.component';
// import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FuseFullscreenComponent } from 'shared/components/fullscreen';
import { FuseLoadingBarComponent } from 'shared/components/loading-bar';
import { FuseNavigationService, FuseVerticalNavigationComponent } from 'shared/components/navigation';
// import { FuseMediaWatcherService } from 'shared/services/media-watcher';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { Navigation } from 'app/core/navigation/navigation.types';
// import { combineLatest, map, Subject, takeUntil } from 'rxjs';
// import { FuseConfig, FuseConfigService } from 'shared/services/config';

@Component({
    selector     : 'layout',
    templateUrl  : './layout.component.html',
    styleUrls    : ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [NgIf, EmptyLayoutComponent, CenteredLayoutComponent, EnterpriseLayoutComponent, MaterialLayoutComponent, ModernLayoutComponent, ClassicLayoutComponent, ClassyLayoutComponent, CompactLayoutComponent, DenseLayoutComponent, FuturisticLayoutComponent, ThinLayoutComponent, SettingsComponent],
})
export class LayoutComponent implements OnInit, OnDestroy
{

    config: FuseConfig;
    layout: string;
    scheme: 'dark' | 'light';
    theme: string;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    isScreenSmall: boolean;
    navigation: Navigation;
    navigationAppearance: 'default' | 'dense' = 'dense';

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        @Inject(DOCUMENT) private _document: any,
        private _navigationService: NavigationService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseConfigService: FuseConfigService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fusePlatformService: FusePlatformService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number
    {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
combineLatest([
    this._fuseConfigService.config$,
    this._fuseMediaWatcherService.onMediaQueryChange$(['(prefers-color-scheme: dark)', '(prefers-color-scheme: light)']),
]).pipe(
    takeUntil(this._unsubscribeAll),
    map(([config, mql]) =>
    {
        const options = {
            scheme: config.scheme,
            theme : config.theme,
        };

        // If the scheme is set to 'auto'...
        if ( config.scheme === 'auto' )
        {
            // Decide the scheme using the media query
            options.scheme = mql.breakpoints['(prefers-color-scheme: dark)'] ? 'dark' : 'light';
        }

        return options;
    }),
).subscribe((options) =>
{
    // Store the options
    this.scheme = options.scheme;
    this.theme = options.theme;

    // Update the scheme and theme
    this._updateScheme();
    this._updateTheme();
});
        // Subscribe to navigation data
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) =>
            {
                this.navigation = navigation;
            });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) =>
            {
                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');

                // Change the navigation appearance
                this.navigationAppearance = this.isScreenSmall ? 'default' : 'dense';
            });
    }

      /**
     * Update the selected scheme
     *
     * @private
     */
      private _updateScheme(): void
      {
          // Remove class names for all schemes
          this._document.body.classList.remove('light', 'dark');

          // Add class name for the currently selected scheme
          this._document.body.classList.add(this.scheme);
      }

      /**
       * Update the selected theme
       *
       * @private
       */
      private _updateTheme(): void
      {
          // Find the class name for the previously selected theme and remove it
          this._document.body.classList.forEach((className: string) =>
          {
              if ( className.startsWith('theme-') )
              {
                  this._document.body.classList.remove(className, className.split('-')[1]);
              }
          });

          // Add class name for the currently selected theme
          this._document.body.classList.add(this.theme);
      }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    /**
     * Toggle the navigation appearance
     */
    toggleNavigationAppearance(): void
    {
        this.navigationAppearance = (this.navigationAppearance === 'default' ? 'dense' : 'default');
    }
}
