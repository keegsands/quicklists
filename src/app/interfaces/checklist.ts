import { ChecklistItem } from "./checklist-item";

export interface Checklist {
    id: string;
    title: string;
    items: ChecklistItem[];
}