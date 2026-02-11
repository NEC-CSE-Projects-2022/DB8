import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Mail, MapPin, Building, User } from 'lucide-react';

export const Creators = () => {
  const teamMembers = [
    {
      name: 'Dodda Venkatreddy',
      department: 'Dept. of CSE',
      college: 'Narasaraopeta Engineering College',
      location: 'Narasaraopeta, India',
      email: 'doddavenkatareddy@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Dodda+Venkatreddy&background=14b8a6&color=fff&size=200&bold=true'
    },
    {
      name: 'Akhil Duddi',
      department: 'Dept. of CSE',
      college: 'Narasaraopeta Engineering College',
      location: 'Narasaraopeta, India',
      email: 'akhilduddi95@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Akhil+Duddi&background=0891b2&color=fff&size=200&bold=true'
    },
    {
      name: 'Silar Shaik',
      department: 'Dept. of CSE',
      college: 'Narasaraopeta Engineering College',
      location: 'Narasaraopeta, India',
      email: 'silarpokemon@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Silar+Shaik&background=14b8a6&color=fff&size=200&bold=true'
    },
    {
      name: 'Paleti Rahul',
      department: 'Dept. of CSE',
      college: 'Narasaraopeta Engineering College',
      location: 'Narasaraopeta, India',
      email: 'paletirahul718@gmail.com',
      avatar: 'https://ui-avatars.com/api/?name=Paleti+Rahul&background=0891b2&color=fff&size=200&bold=true'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Meet Our Team
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The talented individuals behind this educational lung cancer detection project
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:shadow-xl hover:border-teal-300 transition-all overflow-hidden"
              data-testid={`team-member-${index}`}
            >
              <CardContent className="p-3 sm:p-6">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-teal-100 shadow-md mb-3 sm:mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  
                  {/* Department */}
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-teal-600 font-medium mb-2 sm:mb-3">
                    <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{member.department}</span>
                  </div>
                  
                  {/* College */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">
                    {member.college}
                  </p>
                  
                  {/* Location */}
                  <div className="flex items-center gap-1 text-sm text-slate-500 mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{member.location}</span>
                  </div>
                  
                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-teal-600 hover:text-teal-700 font-medium transition-colors bg-teal-50 hover:bg-teal-100 px-3 py-2 rounded-lg"
                    data-testid={`email-${index}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span className="break-all">Email</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50">
          <CardContent className="py-8 px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Narasaraopeta Engineering College
              </h2>
              <p className="text-slate-700 font-medium mb-3">
                Department of Computer Science and Engineering
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                This project represents our dedication to applying AI technology in healthcare for the betterment of society. 
                We aim to contribute to early lung cancer detection through innovative deep learning solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};