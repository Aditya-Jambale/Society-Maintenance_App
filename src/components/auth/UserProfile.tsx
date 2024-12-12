import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Building2, User, Phone, Mail, Home } from 'lucide-react';

export function UserProfile() {
  const { user, isLoaded } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  if (!isLoaded || !user) {
    return null;
  }

  const publicMetadata = user.publicMetadata as { flatNumber?: string; phoneNumber?: string };

  const updateProfile = async (flatNumber: string, phoneNumber: string) => {
    try {
      await user.update({
        publicMetadata: {
          ...user.publicMetadata,
          flatNumber,
          phoneNumber,
        },
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Card variant="glass" className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-16 w-16 rounded-full overflow-hidden">
          <img src={user.imageUrl} alt={user.fullName || ''} className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{user.fullName}</h2>
          <p className="text-gray-600">{publicMetadata.flatNumber || 'Flat number not set'}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-blue-600" />
          <span>{user.fullName}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-600" />
          <span>{user.primaryEmailAddress?.emailAddress}</span>
        </div>
        <div className="flex items-center gap-3">
          <Home className="w-5 h-5 text-blue-600" />
          <span>{publicMetadata.flatNumber || 'Not set'}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-600" />
          <span>{publicMetadata.phoneNumber || 'Not set'}</span>
        </div>
      </div>

      <div className="mt-6">
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </div>
    </Card>
  );
}