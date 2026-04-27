import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step3 } from './step3';
import { FormsModule } from '@angular/forms';
import { vi } from 'vitest';

describe('Step3', () => {
  let component: Step3;
  let fixture: ComponentFixture<Step3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Step3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe mostrar un alert si no se aceptan los términos', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    
    component.termsAccepted = false;
    component.notifyNext();

    expect(alertSpy).toHaveBeenCalledWith('Debes aceptar los términos y condiciones para continuar.');
  });

  it('Debe emitir toNext si los términos están aceptados', () => {
    const emitSpy = vi.spyOn(component.toNext, 'emit');
    
    component.termsAccepted = true;
    component.notifyNext();

    expect(emitSpy).toHaveBeenCalled();
  });

  it('Debe emitir toPrev al pulsar el botón de retroceso', () => {
    const emitSpy = vi.spyOn(component.toPrev, 'emit');
    
    component.notifyPrev();

    expect(emitSpy).toHaveBeenCalled();
  });
});