import { PipeTransform, Pipe } from '@angular/core';
import { Note } from '@app/shared/note.model';

@Pipe({
    name: 'noteFilter'
})

export class NoteFilter implements PipeTransform {
    transform( notes: Note[], searchTerm: string ): Note[]{
        if ( !notes || !searchTerm ) {
            return notes;
        }

        return notes.filter( 
            note => note.title.toLowerCase().
                    indexOf( searchTerm.toLowerCase() ) !== -1
        );
    }
}