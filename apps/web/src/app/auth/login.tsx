import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <main className="flex min-h-dvh items-center justify-center">
        <div className="max-w-xs space-y-4">
          <div>
            <h2 className="w-full text-lg font-bold">Pensou, executou.</h2>
            <h2 className="text-muted-foreground w-full text-lg font-bold">
              Faça login na sua conta do Idea
            </h2>
          </div>
          <div className="space-y-2">
            <Label>E-mail</Label>
            <Input placeholder="Insira seu endereço de e-mail..." />
            <p className="text-muted-foreground text-xs">
              Use um e-mail da sua organização para colaborar com colegas
            </p>
          </div>
          <div className="space-y-2">
            <Label>Senha</Label>
            <Input placeholder="Insira sua senha" />
            <a className="text-primary text-xs font-bold" href="#">
              Esqueceu sua senha?
            </a>
          </div>
          <Button className="w-full">Continuar</Button>
          <p className="text-center text-xs leading-relaxed">
            Ao continuar, você concorda com os{" "}
            <a className="underline" href="#">
              Termos e Condições
            </a>{" "}
            e a{" "}
            <a className="underline" href="#">
              Política de Privacidade
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
