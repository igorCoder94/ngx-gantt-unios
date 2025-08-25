import { GanttUpper } from '../../gantt-upper';
import { NgxGanttRootComponent } from '../../root.component';
import * as i0 from "@angular/core";
export declare class GanttScrollbarComponent {
    ganttUpper: GanttUpper;
    hasFooter: import("@angular/core").InputSignal<boolean>;
    tableWidth: import("@angular/core").InputSignal<number>;
    ganttRoot: import("@angular/core").InputSignal<NgxGanttRootComponent>;
    tableScrollWidth: import("@angular/core").InputSignal<number>;
    constructor(ganttUpper: GanttUpper);
    static ɵfac: i0.ɵɵFactoryDeclaration<GanttScrollbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GanttScrollbarComponent, "gantt-scrollbar", never, { "hasFooter": { "alias": "hasFooter"; "required": false; "isSignal": true; }; "tableWidth": { "alias": "tableWidth"; "required": false; "isSignal": true; }; "ganttRoot": { "alias": "ganttRoot"; "required": false; "isSignal": true; }; "tableScrollWidth": { "alias": "tableScrollWidth"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
