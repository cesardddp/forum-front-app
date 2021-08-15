import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTopicosComponent } from './detalhes-topicos.component';

describe('DetalhesTopicosComponent', () => {
  let component: DetalhesTopicosComponent;
  let fixture: ComponentFixture<DetalhesTopicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesTopicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesTopicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
