import { Injectable } from '@angular/core';

interface Author {
  name: string;
  role: string;
  avatar: string;
  verified?: boolean;
}

interface Comment {
  id: string;
  author: Author;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  hasReplies: boolean;
  replies?: Comment[];
  showReplies?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CommentServiceTestService {
  // Mock data for simulating API calls
  private mockComments: any = [
    {
      id: 'comment-1',
      author: {
        name: 'Sonika Agarwal',
        role: 'Tech Hiring Specialist | Human Resource Professional | Recruiter',
        avatar: 'assets/avatar-placeholder.jpg'
      },
      timeAgo: '27s',
      content: 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus rutrum congue leo eget malesuada tincidunt.',
      likes: 598,
      comments: 0,
      hasReplies: false
    },
    {
      id: 'comment-2',
      author: {
        name: 'Amandeep Negi',
        role: 'Tech Hiring Specialist | Human Resource Professional | Recruiter',
        avatar: 'assets/avatar-placeholder.jpg'
      },
      timeAgo: '27s',
      content: '🔹 We\'re Hiring! 🔔 Exciting Internship and Full-time opportunities are open at Indian Tec Solutions! Work on real projects, learn from experts, and grow your career.',
      likes: 0,
      comments: 2,
      hasReplies: true
    }
  ];

  private mockReplies: { [key: string]: any } = {
    'comment-2': [
      {
        id: 'reply-1',
        author: {
          name: 'Christopher Fernandes',
          role: 'Software Developer',
          avatar: 'assets/avatar-placeholder.jpg'
        },
        timeAgo: '10s',
        content: 'That sounds great! How do I apply for the internship positions?',
        likes: 3,
        comments: 0,
        hasReplies: false
      },
      {
        id: 'reply-2',
        author: {
          name: 'Amandeep Negi',
          role: 'Tech Hiring Specialist | Human Resource Professional | Recruiter',
          avatar: 'assets/avatar-placeholder.jpg'
        },
        timeAgo: '5s',
        content: '👉 Apply now: https://forms.gle/7TDcxogXnZMBbN29',
        likes: 1,
        comments: 0,
        hasReplies: false
      }
    ]
  };

  constructor() { }

  // Simulate API call to get comments for a post
  async getComments(_postId: string): Promise<Comment[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return [...this.mockComments];
  }

  // Simulate API call to get replies for a comment
  async getReplies(commentId: string): Promise<Comment[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return this.mockReplies[commentId] || [];
  }
}
