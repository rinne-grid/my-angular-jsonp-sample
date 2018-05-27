import { Bookmark } from './Bookmark';
import { RelateEntry } from './RelateEntry';

export class EntryInfo {
    bookmarks   : Bookmark[];
    count       : number;
    eid         : number;
    related     : RelateEntry[];
    screenshot  : string;
    title       : string;
    url         : string;
}
