import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandPanel } from '../../components/brand-panel/brand-panel';
import { Step1 } from '../../components/steps/step1/step1';     
import { Step2 } from '../../components/steps/step2/step2';
import { Step3 } from '../../components/steps/step3/step3';
import { Step4 } from '../../components/steps/step4/step4';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, BrandPanel, Step1, Step2, Step3, Step4],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
    currentStep: number = 1;

    nextStep() {
        if (this.currentStep < 4) {
            this.currentStep++;
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
        }
    }

    handleEnd(genders: string[]) {
    console.log('Registro finalizado con géneros seleccionados:', genders);}
}