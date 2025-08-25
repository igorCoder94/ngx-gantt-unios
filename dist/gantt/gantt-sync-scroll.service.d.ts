import * as i0 from "@angular/core";
export declare class GanttSyncScrollService {
    private ngZone;
    private scrollGroupsMap;
    constructor();
    registerScrollEvent(groupName: string, element: HTMLElement, direction: 'x' | 'y'): void;
    unregisterScrollEvent(groupName: string, element: HTMLElement): void;
    private monitorScrollChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<GanttSyncScrollService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GanttSyncScrollService>;
}
