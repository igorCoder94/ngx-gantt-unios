import { OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class GanttSyncScrollXDirective implements OnInit, OnDestroy {
    readonly syncScrollX: import("@angular/core").InputSignal<string>;
    private elementRef;
    private syncScrollService;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GanttSyncScrollXDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GanttSyncScrollXDirective, "[syncScrollX]", never, { "syncScrollX": { "alias": "syncScrollX"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
export declare class GanttSyncScrollYDirective implements OnInit, OnDestroy {
    readonly syncScrollY: import("@angular/core").InputSignal<string>;
    private syncScrollService;
    private elementRef;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GanttSyncScrollYDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GanttSyncScrollYDirective, "[syncScrollY]", never, { "syncScrollY": { "alias": "syncScrollY"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
