import { Component } from '@angular/core';
import { BrandPanel } from '../../components/brand-panel/brand-panel';
import { LoginForm } from '../../components/login/login';
import { Step1 } from '../../components/steps/step1/step1';     
import { Step2 } from '../../components/steps/step2/step2';
import { Step3 } from '../../components/steps/step3/step3';
import { Step4 } from '../../components/steps/step4/step4';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [BrandPanel, LoginForm, Step1, Step2, Step3, Step4],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  currentStep: number = 0;

    constructor(private router: Router) {}

    nextStep() {
        if (this.currentStep < 4) {
            this.currentStep++;
        }
    }

    prevStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
        }
    }

    handleEnd(genders: string[]) {
        console.log('Registro finalizado con géneros seleccionados:', genders);
        this.router.navigate(['/home']);
    }
}