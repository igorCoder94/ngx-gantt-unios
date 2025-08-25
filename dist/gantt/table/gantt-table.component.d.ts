import { EventEmitter, TemplateRef } from '@angular/core';
import { GanttTableDragDroppedEvent, GanttTableDragEndedEvent, GanttTableDragEnterPredicateContext, GanttTableDragStartedEvent, GanttTableEvent, GanttTableItemClickEvent } from '../class';
import * as i0 from "@angular/core";
export declare class NgxGanttTableComponent {
    draggable: boolean;
    maxWidth: number;
    width: number;
    dropEnterPredicate?: (context: GanttTableDragEnterPredicateContext) => boolean;
    dragDropped: EventEmitter<GanttTableDragDroppedEvent<unknown>>;
    dragStarted: EventEmitter<GanttTableDragStartedEvent<unknown>>;
    dragEnded: EventEmitter<GanttTableDragEndedEvent<unknown>>;
    columnChanges: EventEmitter<GanttTableEvent>;
    resizeChange: EventEmitter<number>;
    itemClick: EventEmitter<GanttTableItemClickEvent<unknown>>;
    rowBeforeTemplate: TemplateRef<any>;
    rowAfterTemplate: TemplateRef<any>;
    tableEmptyTemplate: TemplateRef<any>;
    tableFooterTemplate: TemplateRef<any>;
    settingsSlot: TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGanttTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxGanttTableComponent, "ngx-gantt-table", never, { "draggable": { "alias": "draggable"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; "width": { "alias": "width"; "required": false; }; "dropEnterPredicate": { "alias": "dropEnterPredicate"; "required": false; }; }, { "dragDropped": "dragDropped"; "dragStarted": "dragStarted"; "dragEnded": "dragEnded"; "columnChanges": "columnChanges"; "resizeChange": "resizeChange"; "itemClick": "itemClick"; }, ["rowBeforeTemplate", "rowAfterTemplate", "tableEmptyTemplate", "tableFooterTemplate", "settingsSlot"], never, true, never>;
}
