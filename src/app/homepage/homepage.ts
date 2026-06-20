import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  practiceAreas = signal([
    { title: 'Bank And Financial', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=500' },
    { title: 'Car Accident', image: 'https://images.unsplash.com/photo-1516594709564-b9dbb718991b?auto=format&fit=crop&q=80&w=500' },
    { title: 'Personal Injury', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500' },
    { title: 'Family Law', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=500' },
    { title: 'Capital Market', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=500' },
    { title: 'Employment Law', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500' },
    { title: 'Corporate', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=500' },
    { title: 'Dispute Resolution', image: 'https://images.unsplash.com/photo-1521791136064-7986c2959d43?auto=format&fit=crop&q=80&w=500' }
  ]);

  attorneys = signal([
    { name: 'Marisa Goldberg', role: 'Bank & Financial Lawyer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { name: 'Eric Peterson', role: 'Insurance Litigation', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Jack Smith', role: 'Criminal Defense', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
    { name: 'Helen Ederson', role: 'Family Law Specialist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' }
  ]);
}
