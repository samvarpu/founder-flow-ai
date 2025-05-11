
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const Testimonial = ({ quote, author, role, image }: TestimonialProps) => {
  return (
    <Card className="glass-card overflow-hidden border-0 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <svg width="45" height="36" className="text-primary/30" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 36C9 36 5.625 34.5 3.375 31.5C1.125 28.5 0 24.375 0 19.125C0 13.875 1.59375 9.28125 4.78125 5.34375C7.96875 1.40625 12.1875 0 17.4375 1.1875L18.75 5.0625C15.1875 5.0625 12.4688 6.09375 10.5938 8.15625C8.71875 10.2188 7.78125 12.9375 7.78125 16.3125C7.78125 16.6875 7.78125 17.0625 7.78125 17.4375C7.78125 17.8125 7.8125 18.1875 7.875 18.5625C9 17.5625 10.4062 17.0625 12.0938 17.0625C14.5312 17.0625 16.5938 17.9688 18.2812 19.7812C19.9688 21.5938 20.8125 23.8125 20.8125 26.4375C20.8125 29.0625 19.9062 31.3125 18.0938 33.1875C16.2812 35.0625 14.0625 36 11.4375 36H13.5ZM36 36C31.5 36 28.125 34.5 25.875 31.5C23.625 28.5 22.5 24.375 22.5 19.125C22.5 13.875 24.0938 9.28125 27.2812 5.34375C30.4688 1.40625 34.6875 0 39.9375 1.1875L41.25 5.0625C37.6875 5.0625 34.9688 6.09375 33.0938 8.15625C31.2188 10.2188 30.2812 12.9375 30.2812 16.3125C30.2812 16.6875 30.2812 17.0625 30.2812 17.4375C30.2812 17.8125 30.3125 18.1875 30.375 18.5625C31.5 17.5625 32.9062 17.0625 34.5938 17.0625C37.0312 17.0625 39.0938 17.9688 40.7812 19.7812C42.4688 21.5938 43.3125 23.8125 43.3125 26.4375C43.3125 29.0625 42.4062 31.3125 40.5938 33.1875C38.7812 35.0625 36.5625 36 33.9375 36H36Z" fill="currentColor"/>
            </svg>
          </div>
          
          <p className="text-lg mb-6 flex-1">{quote}</p>
          
          <div className="flex items-center">
            <img 
              src={image} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-semibold">{author}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
