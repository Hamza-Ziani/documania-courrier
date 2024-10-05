/* eslint-disable */
import { FuseNavigationItem } from 'shared/components/navigation';

export const defaultNavigation: FuseNavigationItem[] =
    [
        {
            id   : 'Courriers récents',
            title: 'Courriers récents',
            type : 'basic',
            icon : 'heroicons_outline:clock',
            link : '/apps/courrier-recents'
        },
        {
            id   : 'Courriers favoris',
            title: 'Courriers favoris',
            type : 'basic',
            icon : 'heroicons_outline:star',
            link : '/apps/courriers-favoris'
        },
        {
            id   : 'Courriers a Mon Equipe',
            title: 'Courriers a Mon Equipe',
            type : 'basic',
            icon : 'heroicons_outline:users',
            link : '/apps/courrier-equipe'
        },
        {
            id   : 'Courriers Traites',
            title: 'Courriers Traites',
            type : 'basic',
            icon : 'heroicons_outline:check-circle',
            link : '/apps/courriers-traites'
        },
        {
            id   : 'Recherches Frequentes',
            title: 'Recherches Frequentes',
            type : 'basic',
            icon : 'heroicons_outline:magnifying-glass',
            link : '/apps/recherches-frequentes'
        },
        {
            id   : 'Referentiel Des Courriers',
            title: 'Referentiel Des Courriers',
            type    : 'collapsable',
            icon : 'heroicons_outline:folder',
            children: [
                {
                    id   : 'Rechercher Courrier',
                    title: 'Rechercher Courrier',
                    type : 'basic',
                    icon : 'heroicons_outline:envelope',
                    link : '/apps/rechercher-courrier',
                },
                {
                    id   : 'Rechercher Document',
                    title: 'Rechercher Document',
                    type : 'basic',
                    icon : 'heroicons_outline:document',
                    link : '/apps/rechercher-document',
                },
            ],
        },
        {
            id   : 'Ajouter Courrier',
            title: 'Ajouter Courrier',
            type : 'basic',
            icon : 'heroicons_outline:plus-circle',
            link : '/apps/ajouter-courrier'
        },
        {
            id   : 'Ajouter Document',
            title: 'Ajouter Document',
            type : 'basic',
            icon : 'heroicons_outline:document-plus',
            link : '/apps/ajouter-document'
        },
        {
            id   : 'Ajouter Liaisons',
            title: 'Ajouter Liaisons',
            type    : 'collapsable',
            icon : 'heroicons_outline:link',
            children: [
                {
                    id   : 'Courrier a Courrier',
                    title: 'Courrier a Courrier',
                    type : 'basic',
                    icon : 'heroicons_outline:arrows-right-left',
                    link : '/apps/liaison-courrier-courrier',
                },
                {
                    id   : 'Document a Courrier',
                    title: 'Document Courrier',
                    type : 'basic',
                    icon : 'heroicons_outline:document-arrow-up',
                    link : '/apps/liaison-document-courrier',
                },
            ],
        },
        {
            id   : 'Flux Courriers ',
            title: 'Flux Courriers',
            type : 'basic',
            icon : 'heroicons_outline:arrow-path',
            link : '/apps/flux-courriers'
        },
        {
            id   : 'Courriers Archives ',
            title: 'Courriers Archives',
            type : 'basic',
            icon : 'heroicons_outline:archive-box',
            link : '/apps/courrier-archives'
        },
        {
            id   : 'Dashboard',
            title: 'Dashboard',
            type : 'basic',
            icon : 'heroicons_outline:presentation-chart-bar',
            link : '/dashboards'
        },
        {
            id   : 'Reports',
            title: 'Reports',
            type : 'basic',
            icon : 'heroicons_outline:document-chart-bar',
            link : '/apps/reports'
        },
        {
            id   : 'Preferences',
            title: 'Preferences',
            type : 'basic',
            icon : 'heroicons_outline:cog',
            link : '/apps/preferences'
        },
        {
            id   : 'Console Admin',
            title: 'Console Admin',
            type : 'basic',
            icon : 'heroicons_outline:command-line',
            link : '/dashboards/admin'
        },
        {
            id   : 'Logout',
            title: 'Logout',
            type : 'basic',
            icon : 'heroicons_outline:arrow-right-on-rectangle',
            link : 'sign-in'
        },


];
export const compactNavigation: FuseNavigationItem[] =
[
    {
        id   : 'Courriers récents',
        title: 'Courriers récents',
        type : 'basic',
        icon : 'heroicons_outline:clock',
        link : '/apps/courrier-recents'
    },
    {
        id   : 'Courriers favoris',
        title: 'Courriers favoris',
        type : 'basic',
        icon : 'heroicons_outline:star',
        link : '/apps/courriers-favoris'
    },
    {
        id   : 'Courriers Traites',
        title: 'Courriers Traites',
        type : 'basic',
        icon : 'heroicons_outline:check-circle',
        link : '/apps/courriers-traites'
    },
    {
        id   : 'Recherches Frequentes',
        title: 'Recherches Frequentes',
        type : 'basic',
        icon : 'heroicons_outline:magnifying-glass',
        link : '/apps/recherches-frequentes'
    },
    {
        id   : 'Referentiel Des Courriers',
        title: 'Referentiel Des Courriers',
        type    : 'collapsable',
        icon : 'heroicons_outline:folder',
        children: [
            {
                id   : 'Rechercher Courrier',
                title: 'Rechercher Courrier',
                type : 'basic',
                icon : 'heroicons_outline:envelope',
                link : '/apps/rechercher-courrier',
            },
            {
                id   : 'Rechercher Document',
                title: 'Rechercher Document',
                type : 'basic',
                icon : 'heroicons_outline:document',
                link : '/apps/rechercher-document',
            },
        ],
    },
    {
        id   : 'Ajouter Courrier',
        title: 'Ajouter Courrier',
        type : 'basic',
        icon : 'heroicons_outline:plus-circle',
        link : '/apps/ajouter-courrier'
    },
    {
        id   : 'Ajouter Document',
        title: 'Ajouter Document',
        type : 'basic',
        icon : 'heroicons_outline:document-plus',
        link : '/apps/ajouter-document'
    },
    {
        id   : 'Ajouter Liaisons',
        title: 'Ajouter Liaisons',
        type    : 'collapsable',
        icon : 'heroicons_outline:link',
        children: [
            {
                id   : 'Courrier a Courrier',
                title: 'Courrier a Courrier',
                type : 'basic',
                icon : 'heroicons_outline:arrows-right-left',
                link : '/apps/liaison-courrier-courrier',
            },
            {
                id   : 'Document a Courrier',
                title: 'Document Courrier',
                type : 'basic',
                icon : 'heroicons_outline:document-arrow-up',
                link : '/apps/liaison-document-courrier',
            },
        ],
    },
    {
        id   : 'Flux Courriers ',
        title: 'Flux Courriers',
        type : 'basic',
        icon : 'heroicons_outline:arrow-path',
        link : '/apps/flux-courriers'
    },
    {
        id   : 'Courriers Archives ',
        title: 'Courriers Archives',
        type : 'basic',
        icon : 'heroicons_outline:archive-box',
        link : '/apps/courrier-archives'
    },
    {
        id   : 'Dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:presentation-chart-bar',
        link : '/dashboards'
    },
    {
        id   : 'Reports',
        title: 'Reports',
        type : 'basic',
        icon : 'heroicons_outline:document-chart-bar',
        link : '/apps/reports'
    },
    {
        id   : 'Preferences',
        title: 'Preferences',
        type : 'basic',
        icon : 'heroicons_outline:cog',
        link : '/apps/preferences'
    },
    {
        id   : 'Console Admin',
        title: 'Console Admin',
        type : 'basic',
        icon : 'heroicons_outline:command-line',
        link : '/dashboards/admin'
    },
    {
        id   : 'Logout',
        title: 'Logout',
        type : 'basic',
        icon : 'heroicons_outline:arrow-right-on-rectangle',
        link : 'sign-in'
    },


];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'Courriers récents',
        title: 'Courriers récents',
        type : 'basic',
        icon : 'heroicons_outline:clock',
        link : '/apps/courrier-recents'
    },
    {
        id   : 'Courriers favoris',
        title: 'Courriers favoris',
        type : 'basic',
        icon : 'heroicons_outline:star',
        link : '/apps/courriers-favoris'
    },
    {
        id   : 'Courriers Traites',
        title: 'Courriers Traites',
        type : 'basic',
        icon : 'heroicons_outline:check-circle',
        link : '/apps/courriers-traites'
    },
    {
        id   : 'Recherches Frequentes',
        title: 'Recherches Frequentes',
        type : 'basic',
        icon : 'heroicons_outline:magnifying-glass',
        link : '/apps/recherches-frequentes'
    },
    {
        id   : 'Referentiel Des Courriers',
        title: 'Referentiel Des Courriers',
        type    : 'collapsable',
        icon : 'heroicons_outline:folder',
        children: [
            {
                id   : 'Rechercher Courrier',
                title: 'Rechercher Courrier',
                type : 'basic',
                icon : 'heroicons_outline:envelope',
                link : '/apps/rechercher-courrier',
            },
            {
                id   : 'Rechercher Document',
                title: 'Rechercher Document',
                type : 'basic',
                icon : 'heroicons_outline:document',
                link : '/apps/rechercher-document',
            },
        ],
    },
    {
        id   : 'Ajouter Courrier',
        title: 'Ajouter Courrier',
        type : 'basic',
        icon : 'heroicons_outline:plus-circle',
        link : '/apps/ajouter-courrier'
    },
    {
        id   : 'Ajouter Document',
        title: 'Ajouter Document',
        type : 'basic',
        icon : 'heroicons_outline:document-plus',
        link : '/apps/ajouter-document'
    },
    {
        id   : 'Ajouter Liaisons',
        title: 'Ajouter Liaisons',
        type    : 'collapsable',
        icon : 'heroicons_outline:link',
        children: [
            {
                id   : 'Courrier a Courrier',
                title: 'Courrier a Courrier',
                type : 'basic',
                icon : 'heroicons_outline:arrows-right-left',
                link : '/apps/liaison-courrier-courrier',
            },
            {
                id   : 'Document a Courrier',
                title: 'Document Courrier',
                type : 'basic',
                icon : 'heroicons_outline:document-arrow-up',
                link : '/apps/liaison-document-courrier',
            },
        ],
    },
    {
        id   : 'Flux Courriers ',
        title: 'Flux Courriers',
        type : 'basic',
        icon : 'heroicons_outline:arrow-path',
        link : '/apps/flux-courriers'
    },
    {
        id   : 'Courriers Archives ',
        title: 'Courriers Archives',
        type : 'basic',
        icon : 'heroicons_outline:archive-box',
        link : '/apps/courrier-archives'
    },
    {
        id   : 'Dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:presentation-chart-bar',
        link : '/dashboards'
    },
    {
        id   : 'Reports',
        title: 'Reports',
        type : 'basic',
        icon : 'heroicons_outline:document-chart-bar',
        link : '/apps/reports'
    },
    {
        id   : 'Preferences',
        title: 'Preferences',
        type : 'basic',
        icon : 'heroicons_outline:cog',
        link : '/apps/preferences'
    },
    {
        id   : 'Console Admin',
        title: 'Console Admin',
        type : 'basic',
        icon : 'heroicons_outline:command-line',
        link : '/dashboards/admin'
    },
    {
        id   : 'Logout',
        title: 'Logout',
        type : 'basic',
        icon : 'heroicons_outline:arrow-right-on-rectangle',
        link : 'sign-in'
    },


];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'Courriers récents',
        title: 'Courriers récents',
        type : 'basic',
        icon : 'heroicons_outline:clock',
        link : '/apps/courrier-recents'
    },
    {
        id   : 'Courriers favoris',
        title: 'Courriers favoris',
        type : 'basic',
        icon : 'heroicons_outline:star',
        link : '/apps/courriers-favoris'
    },
    {
        id   : 'Courriers Traites',
        title: 'Courriers Traites',
        type : 'basic',
        icon : 'heroicons_outline:check-circle',
        link : '/apps/courriers-traites'
    },
    {
        id   : 'Recherches Frequentes',
        title: 'Recherches Frequentes',
        type : 'basic',
        icon : 'heroicons_outline:magnifying-glass',
        link : '/apps/recherches-frequentes'
    },
    {
        id   : 'Referentiel Des Courriers',
        title: 'Referentiel Des Courriers',
        type    : 'collapsable',
        icon : 'heroicons_outline:folder',
        children: [
            {
                id   : 'Rechercher Courrier',
                title: 'Rechercher Courrier',
                type : 'basic',
                icon : 'heroicons_outline:envelope',
                link : '/apps/rechercher-courrier',
            },
            {
                id   : 'Rechercher Document',
                title: 'Rechercher Document',
                type : 'basic',
                icon : 'heroicons_outline:document',
                link : '/apps/rechercher-document',
            },
        ],
    },
    {
        id   : 'Ajouter Courrier',
        title: 'Ajouter Courrier',
        type : 'basic',
        icon : 'heroicons_outline:plus-circle',
        link : '/apps/ajouter-courrier'
    },
    {
        id   : 'Ajouter Document',
        title: 'Ajouter Document',
        type : 'basic',
        icon : 'heroicons_outline:document-plus',
        link : '/apps/ajouter-document'
    },
    {
        id   : 'Ajouter Liaisons',
        title: 'Ajouter Liaisons',
        type    : 'collapsable',
        icon : 'heroicons_outline:link',
        children: [
            {
                id   : 'Courrier a Courrier',
                title: 'Courrier a Courrier',
                type : 'basic',
                icon : 'heroicons_outline:arrows-right-left',
                link : '/apps/liaison-courrier-courrier',
            },
            {
                id   : 'Document a Courrier',
                title: 'Document Courrier',
                type : 'basic',
                icon : 'heroicons_outline:document-arrow-up',
                link : '/apps/liaison-document-courrier',
            },
        ],
    },
    {
        id   : 'Flux Courriers ',
        title: 'Flux Courriers',
        type : 'basic',
        icon : 'heroicons_outline:arrow-path',
        link : '/apps/flux-courriers'
    },
    {
        id   : 'Courriers Archives ',
        title: 'Courriers Archives',
        type : 'basic',
        icon : 'heroicons_outline:archive-box',
        link : '/apps/courrier-archives'
    },
    {
        id   : 'Dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:presentation-chart-bar',
        link : '/dashboards'
    },
    {
        id   : 'Reports',
        title: 'Reports',
        type : 'basic',
        icon : 'heroicons_outline:document-chart-bar',
        link : '/apps/reports'
    },
    {
        id   : 'Preferences',
        title: 'Preferences',
        type : 'basic',
        icon : 'heroicons_outline:cog',
        link : '/apps/preferences'
    },
    {
        id   : 'Console Admin',
        title: 'Console Admin',
        type : 'basic',
        icon : 'heroicons_outline:command-line',
        link : '/dashboards/admin'
    },
    {
        id   : 'Logout',
        title: 'Logout',
        type : 'basic',
        icon : 'heroicons_outline:arrow-right-on-rectangle',
        link : 'sign-in'
    },


];
