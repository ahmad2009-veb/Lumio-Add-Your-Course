import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Contact = () => {

const [message, setMessage] = useState("");
const [phone, setPhone] = useState("");

const handleSendMessage = async () => {
  if (!message || !phone) return alert("Enter message and phone");

  const res = await fetch("http://localhost:8080/send-sms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, phone }),
  });

  if (res.ok) alert("Message sent!");
  else alert("Failed to send message.");
};

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                <Input
                  id="phone"
                  placeholder="+992901234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Button
                  type="submit"
                  size="lg"
                  onClick={handleSendMessage}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Here are other ways to get in
                  touch with our team.
                </p>
              </div>

              <Card className="border border-border hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Our support team is here to help
                      </p>
                      <a
                        href="mailto:support@lumio.com"
                        className="text-primary hover:underline"
                      >
                        support@lumio.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Call Us
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Mon-Fri from 9am to 6pm
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-primary hover:underline"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Live Chat
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Chat with our support team
                      </p>
                      <button className="text-primary hover:underline">
                        Start a conversation
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;