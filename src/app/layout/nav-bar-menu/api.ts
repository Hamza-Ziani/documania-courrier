import { Injectable } from '@angular/core';
import { FuseNavigationItem } from 'shared/components/navigation';
import { FuseMockApiService } from 'shared/lib/mock-api';
import { defaultNavigation } from 'app/layout/nav-bar-menu/data';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class NavBarMenu
{
    private readonly _defaultNavigation: FuseNavigationItem[] = defaultNavigation;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/common/navigation')
            .reply(() =>
            {
                // Return the response
                return [
                    200,
                    {
                        default   : cloneDeep(this._defaultNavigation),
                    },
                ];
            });
    }
}
