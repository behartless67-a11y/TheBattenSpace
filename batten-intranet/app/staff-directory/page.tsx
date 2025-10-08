'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { staffDirectory } from '@/data/staff-directory';
import { useState } from 'react';
import Image from 'next/image';

export default function StaffDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredStaff = staffDirectory.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.biography.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/garrett-hall-sunset.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%)'
        }}
      ></div>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-background/80 -z-10"></div>

      <Header />

      <main className="w-full max-w-[1600px] mx-auto px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary mb-4">Staff Directory</h1>
          <div className="w-24 h-1 bg-accent mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Meet the dedicated team at the Frank Batten School of Leadership and Public Policy
          </p>
        </div>

        {/* Search Bar and View Toggle */}
        <div className="mb-8 flex gap-4 items-center">
          <div className="flex-1 max-w-2xl">
            <input
              type="text"
              placeholder="Search by name, position, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-lg border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] focus:outline-none focus:border-accent focus:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all bg-background/95"
            />
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 bg-background/95 border-2 border-primary rounded-lg p-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded text-sm font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded text-sm font-semibold transition-all ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredStaff.length} of {staffDirectory.length} staff members
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredStaff.map((staff, index) => (
              <div
                key={index}
                className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-xl overflow-hidden"
              >
                {/* Photo */}
                <div className="relative w-full h-64 bg-muted">
                  <Image
                    src={`/staff-photos/${staff.lastName.toLowerCase().replace(/\s+/g, '-')}.png`}
                    alt={staff.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to initials if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-primary/10">
                            <div class="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                              <span class="text-4xl font-bold text-white">
                                ${staff.firstName[0]}${staff.lastName[0]}
                              </span>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-primary mb-1">{staff.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{staff.position}</p>

                  {(staff.officeNumber || staff.phone) && (
                    <div className="mb-3 text-sm space-y-1">
                      {staff.officeNumber && (
                        <p className="text-muted-foreground">
                          <span className="font-semibold">Office:</span> {staff.officeNumber}
                        </p>
                      )}
                      {staff.phone && (
                        <p className="text-muted-foreground">
                          <span className="font-semibold">Phone:</span> {staff.phone}
                        </p>
                      )}
                    </div>
                  )}

                  <p className="text-sm text-foreground line-clamp-4">
                    {staff.biography}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4 mb-12">
            {filteredStaff.map((staff, index) => (
              <div
                key={index}
                className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all rounded-xl p-6"
              >
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0 relative w-16 h-16">
                    <Image
                      src={`/staff-photos/${staff.lastName.toLowerCase().replace(/\s+/g, '-')}.png`}
                      alt={staff.name}
                      fill
                      className="object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                              <span class="text-2xl font-bold text-white">
                                ${staff.firstName[0]}${staff.lastName[0]}
                              </span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-primary">{staff.name}</h3>
                        <p className="text-sm text-muted-foreground">{staff.position}</p>
                      </div>
                      <div className="text-sm text-right flex-shrink-0">
                        {staff.officeNumber && (
                          <p className="text-muted-foreground">
                            <span className="font-semibold">Office:</span> {staff.officeNumber}
                          </p>
                        )}
                        {staff.phone && (
                          <p className="text-muted-foreground">
                            <span className="font-semibold">Phone:</span> {staff.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-foreground line-clamp-2">
                      {staff.biography}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredStaff.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No staff members found matching &quot;{searchQuery}&quot;
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
