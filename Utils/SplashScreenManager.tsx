"use client"
import React, { ReactNode, useEffect, useState } from 'react'
import SplashScreen from './SplashScreen';

interface SplashScreenManagerProps {
    children: ReactNode;
  }
  export default function SplashScreenManager({ children }: SplashScreenManagerProps) {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowSplash(false);
        }, 3000);  // Duration of splash screen visibility
        return () => clearTimeout(timeout);
      }, []);
      
    const finishLoading = () => {
        setShowSplash(false);
      }
    return showSplash ? <SplashScreen finishLoading={finishLoading} /> : children ;
  }