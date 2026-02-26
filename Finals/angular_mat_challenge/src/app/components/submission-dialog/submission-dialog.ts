import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-submission-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="dialog-container">
      <div class="header">
        <div class="icon-circle">
          <mat-icon class="success-icon">check_circle</mat-icon>
        </div>
        <h2 mat-dialog-title>Entry Confirmed!</h2>
        <p class="subtitle">You're now on the list, <strong>{{ name }}</strong>!</p>
      </div>
      
      <mat-dialog-content>
        <div class="status-badge">
          <svg class="twitch-mini-logo" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
          </svg>
          <span>Twitch Verified</span>
        </div>

        <p class="message">
          Your submission for the <strong>Lifetime Premium</strong> subscription has been received.
        </p>
        
        <div class="info-grid">
          <div class="info-item">
            <span class="label">GAMER TAG</span>
            <span class="value">{{ data.gamerTag }}</span>
          </div>
          <div class="info-item">
            <span class="label">ENTRY ID</span>
            <span class="value highlight">#{{ entryId }}</span>
          </div>
        </div>

        <p class="email-notice">
          📧 Confirmation sent to <em>{{ data.email }}</em>
        </p>
      </mat-dialog-content>
      
      <mat-dialog-actions align="center">
        <button mat-flat-button color="primary" [mat-dialog-close]="true" class="close-btn">
          GOT IT
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .dialog-container {
      padding: 1rem;
      text-align: center;
      font-family: 'Outfit', sans-serif;
      max-width: 400px;
      background: #18181b;
      color: white;
    }
    
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .icon-circle {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: rgba(145, 70, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(145, 70, 255, 0.3);
    }
    
    .success-icon {
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
      color: #bf94ff;
    }
    
    h2 {
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
      color: #ffffff;
    }
    
    .subtitle {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }
    
    .subtitle strong {
      color: #bf94ff;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.8rem;
      background: rgba(145, 70, 255, 0.15);
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #bf94ff;
      margin-bottom: 1.5rem;
    }

    .twitch-mini-logo {
      width: 14px;
      height: 14px;
    }
    
    .message {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.6;
      margin: 0 0 1.5rem 0;
    }
    
    .message strong {
      color: #ffffff;
    }
    
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.03);
      padding: 1rem;
      border-radius: 12px;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .info-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    
    .info-item .label {
      font-size: 0.65rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.4);
      letter-spacing: 0.5px;
    }
    
    .info-item .value {
      font-size: 1rem;
      font-weight: 600;
      color: #ffffff;
    }
    
    .info-item .value.highlight {
      color: #bf94ff;
    }
    
    .email-notice {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
      margin: 0;
    }
    
    .email-notice em {
      color: #bf94ff;
      font-style: normal;
    }
    
    .close-btn {
      padding: 0.75rem 3rem;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 8px;
      background: linear-gradient(135deg, #9146FF, #7c3aed);
      font-family: 'Space Grotesk', sans-serif;
    }
    
    /* Light mode */
    :host-context(body.light-mode) .dialog-container {
      background: #ffffff;
      color: #18181b;
    }
    
    :host-context(body.light-mode) h2 {
      color: #18181b;
    }
    
    :host-context(body.light-mode) .subtitle,
    :host-context(body.light-mode) .message,
    :host-context(body.light-mode) .email-notice {
      color: rgba(0, 0, 0, 0.6);
    }

    :host-context(body.light-mode) .message strong,
    :host-context(body.light-mode) .info-item .value {
      color: #18181b;
    }

    :host-context(body.light-mode) .info-grid {
      background: rgba(0, 0, 0, 0.03);
      border-color: rgba(0, 0, 0, 0.05);
    }

    :host-context(body.light-mode) .info-item .label {
      color: rgba(0, 0, 0, 0.4);
    }
  `]
})
export class SubmissionDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly entryId = Math.floor(100000 + Math.random() * 900000);

  // Add name getter for template
  get name(): string {
    return this.data?.name || this.data?.fullName || 'Player';
  }
}
