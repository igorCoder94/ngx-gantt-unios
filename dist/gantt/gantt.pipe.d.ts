import { PipeTransform } from '@angular/core';
import { GanttGroupInternal, GanttItemInternal, GanttItemType } from './class';
import * as i0 from "@angular/core";
export declare class IsGanttRangeItemPipe implements PipeTransform {
    transform(value: GanttItemType): value is GanttItemType.range;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsGanttRangeItemPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsGanttRangeItemPipe, "isGanttRangeItem", true>;
}
export declare class IsGanttBarItemPipe implements PipeTransform {
    transform(value: GanttItemType): value is GanttItemType.bar;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsGanttBarItemPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsGanttBarItemPipe, "isGanttBarItem", true>;
}
export declare class IsGanttCustomItemPipe implements PipeTransform {
    transform(value: GanttItemType): value is GanttItemType.custom;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsGanttCustomItemPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsGanttCustomItemPipe, "isGanttCustomItem", true>;
}
export declare class IsGanttGroupPipe implements PipeTransform {
    transform(data: GanttItemInternal | GanttGroupInternal): data is GanttGroupInternal;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsGanttGroupPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IsGanttGroupPipe, "isGanttGroup", true>;
}
