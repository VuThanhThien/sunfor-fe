import { defineStore } from 'pinia';
import { type DashboardState } from './types';

export const useState = defineStore({
  id: 'dashboard.state',
  state: (): DashboardState => {
    return {
      welcomeText: 'Welcome to Dashboard! ...',
      isSBPin: true,
      isSBOpen: true,
      userAvatar: ''
    };
  }
});
