import { Component, effect, ElementRef, input, signal, viewChild } from '@angular/core';
import gsap from 'gsap';
import { ChevronDown, ChevronUp, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-collapsible',
  imports: [LucideAngularModule],
  templateUrl: './collapsible.html',
  styleUrl: './collapsible.scss',
})
export class Collapsible {
  readonly icons = { ChevronDown, ChevronUp };
  listEl = viewChild<ElementRef<HTMLDivElement>>('listEl');
  isExpanded = signal(true);
  title = input.required<string>();
  #init = false;
  #collapsibleAnimationEffect = effect(() => {
    const el = this.listEl()?.nativeElement;
    if (!el) return;
    const config = this.isExpanded()
      ? { height: 'auto', paddingTop: '1rem', opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      : { height: 0, paddingTop: 0, opacity: 0, y: -4, duration: 0.3, ease: 'power2.in' };
    this.#init ? gsap.to(el, config) : this.isExpanded() && gsap.set(el, config);
    this.#init = true;
  });
}
