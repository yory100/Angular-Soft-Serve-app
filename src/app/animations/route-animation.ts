import {transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

export const slideInAnimation =
 trigger('routeAnimations', [

        transition('home => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),{ optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),

        transition('* => home', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),{ optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),

        transition('details => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),{ optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(-100%)' }))
                ], { optional: true }),
            ])
        ]),

        transition('addnote => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),{ optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(-100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(100%)' }))
                ], { optional: true }),
            ])
        ]),

        transition('editnote => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),{ optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(-100%)' }))
                ], { optional: true }),
            ])
        ]),

    ]);