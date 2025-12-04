import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  total = input(0);
  completed = input(0);
  countPosition = input<'left' | 'right' | 'top' | 'bottom'>('right');
  description = input<string | undefined>(undefined);
  percentage = computed(() => {
    const total = this.total();
    return total ? Math.min(100, Math.max(0, (this.completed() / total) * 100)) : 0;
  });

  isHorizontal = computed(() => {
    const pos = this.countPosition();
    return pos === 'left' || pos === 'right';
  });
}
