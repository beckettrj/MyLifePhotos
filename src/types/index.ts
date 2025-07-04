/**
 * Core type definitions for MyLifePictures.ai
 * Updated to match your BIGINT schema structure
 */

export interface User {
  id: string; // UUID string format (from auth)
  email: string;
  full_name?: string;
  avatar_url?: string;
  preferred_ai_name: string;
  night_mode_start: string;
  night_mode_end: string;
  coaxing_mode: boolean;
  created_at: string;
  updated_at: string;
}

export interface PhotoFolder {
  id: number; // BIGINT from your schema
  user_id: number; // BIGINT from your schema
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Photo {
  id: number; // BIGINT generated by default as identity
  created_at: string; // timestamp with time zone not null default now()
  folder_id: number; // BIGINT not null
  user_id_uuid?: number; // BIGINT null
  user_id_bigint?: number; // BIGINT null
  user_id?: number; // BIGINT null
  display_name?: string; // text null
  id_uuid?: string; // uuid null default gen_random_uuid()
  
  // Additional fields for UI display
  file_path?: string; // URL to display the image
  is_hidden?: boolean;
  is_favorite?: boolean;
  tags?: string[];
}

export interface AIProvider {
  id: 'openai' | 'gemini' | 'anthropic' | 'grok';
  name: string;
  icon: string;
  description: string;
  isConfigured: boolean;
  isValid: boolean;
  lastValidated?: string;
}

export interface VoiceCommand {
  command: string;
  variations: string[];
  action: string;
  parameters?: Record<string, any>;
}

export interface SlideshowSettings {
  mode: 'random' | 'sequential' | 'reverse' | 'date-asc' | 'date-desc';
  interval: number; // seconds
  folders: number[]; // BIGINT folder IDs
  transition: 'fade' | 'slide' | 'zoom';
  show_captions: boolean;
  night_mode_active: boolean;
  is_playing: boolean;
  current_index: number;
  volume: number;
}

export interface AppSettings {
  ai_provider: AIProvider['id'];
  ai_assistant_name: string;
  voice_activation: 'push-to-talk' | 'wake-word' | 'always-on';
  wake_word: string;
  night_mode_start: string;
  night_mode_end: string;
  bedtime_message: string;
  font_size: 'small' | 'medium' | 'large' | 'xl';
  theme: 'light' | 'dark' | 'auto';
  high_contrast: boolean;
  coaxing_mode: boolean;
  profanity_filter: boolean;
  emergency_contacts: string[];
  developer_mode: boolean; // Hidden developer mode toggle
}

export interface AudioRecording {
  id: number; // BIGINT from your schema
  user_id: string; // UUID string format
  photo_id?: number; // BIGINT from your schema
  transcript: string;
  audio_url: string;
  duration: number;
  sentiment?: 'positive' | 'neutral' | 'negative' | 'distress';
  created_at: string;
}