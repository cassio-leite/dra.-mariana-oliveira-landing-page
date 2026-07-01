import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MessageCircle, Mail, Clock3, ArrowRight, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.string().email("Informe um e-mail válido."),
  message: z.string().min(10, "A mensagem deve possuir pelo menos 10 caracteres."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      // Simular envio
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
      form.reset();
      toast.success("Mensagem enviada", {
        description: "Obrigado pelo contato. Retornarei em breve.",
        duration: 4000,
      });
    } catch (error) {
      toast.error("Não foi possível enviar a mensagem", {
        description: "Tente novamente em alguns instantes.",
        duration: 4000,
      });
    }
  }

  return (
    <section id="contato" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-xs uppercase tracking-[0.2em] text-sage-deep block mb-4">
            Contato
          </span>
          <BlurFade>
            <h2 className="text-3xl md:text-5xl font-light leading-tight">Vamos conversar?</h2>
          </BlurFade>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Se você deseja iniciar sua jornada terapêutica ou possui alguma dúvida, entre em
            contato. Será um prazer acolher você.
          </p>
        </div>

        {/* Layout principal */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Coluna esquerda: Cards */}
          <div className="space-y-6">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                text: "Retorno em até 24 horas.",
                sub: "Segunda a sexta, das 09h às 18h.",
              },
              {
                icon: Mail,
                title: "E-mail",
                text: "Envie sua mensagem a qualquer momento.",
                sub: "Resposta em horário comercial.",
              },
              {
                icon: Clock3,
                title: "Horários",
                text: "Segunda a sexta",
                sub: "09h às 18h.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-soft p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-sage/10 text-sage-deep">
                    <card.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{card.title}</h3>
                </div>
                <p className="text-foreground font-medium text-base">{card.text}</p>
                <p className="text-muted-foreground text-sm">{card.sub}</p>
              </div>
            ))}
          </div>

          {/* Coluna direita: Formulário */}
          <div className="relative rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-elegant p-8">
            {/* Efeito de luz */}
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sage-soft/10 blur-3xl pointer-events-none"
            />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">Nome</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome"
                          className={`rounded-2xl border-border/60 bg-background/60 focus-visible:ring-sage ${
                            form.formState.errors.name ? "border-destructive" : ""
                          }`}
                          {...field}
                          disabled={form.formState.isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">E-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seuemail@exemplo.com"
                          className={`rounded-2xl border-border/60 bg-background/60 focus-visible:ring-sage ${
                            form.formState.errors.email ? "border-destructive" : ""
                          }`}
                          {...field}
                          disabled={form.formState.isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">
                        Mensagem
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte um pouco sobre como posso ajudar."
                          className={`rounded-2xl border-border/60 bg-background/60 focus-visible:ring-sage min-h-[150px] ${
                            form.formState.errors.message ? "border-destructive" : ""
                          }`}
                          {...field}
                          disabled={form.formState.isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting || !form.formState.isValid}
                  className="rounded-full shadow-soft transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full lg:w-auto h-12 px-8 gap-2 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Enviar formulário de contato"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
