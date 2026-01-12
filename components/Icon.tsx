import React from 'react';
import { 
  Heart, ShieldCheck, Scale, Zap, Users, 
  Baby, Shield, GraduationCap, Home, Brain, HandHeart,
  Menu, X, MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Instagram,
  Leaf, Eye, Target, Briefcase, ShoppingBag, Factory, Award, Activity, Truck, Mic,
  ChevronDown, Download, Play, Video
} from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const icons: Record<string, React.ElementType> = {
  Heart, ShieldCheck, Scale, Zap, Users,
  Baby, Shield, GraduationCap, Home, Brain, HandHeart,
  Menu, X, MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Instagram,
  Leaf, Eye, Target, Briefcase, ShoppingBag, Factory, Award, Activity, Truck, Mic,
  ChevronDown, Download, Play, Video
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, className }) => {
  const LucideIcon = icons[name] || icons.Heart; // Fallback to Heart
  return <LucideIcon size={size} className={className} />;
};