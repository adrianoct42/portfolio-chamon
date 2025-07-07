// PositionDemo.tsx
export default function PositionDemo() {
  return (
    <div className="space-y-12 p-8">
      {/* STATIC */}
      <section>
        <h2 className="text-xl font-bold mb-2">🔵 Static (padrão)</h2>
        <div className="relative h-32 bg-gray-100 border">
          <div className="bg-blue-300 p-2">
            Elemento estático (segue o fluxo)
          </div>
        </div>
      </section>

      {/* RELATIVE + ABSOLUTE */}
      <section>
        <h2 className="text-xl font-bold mb-2">🟢 Relative + 🔴 Absolute</h2>
        <div className="relative h-40 bg-gray-100 border">
          <div className="bg-green-300 p-2">Pai com `relative`</div>
          <div className="absolute top-2 right-2 bg-red-400 p-2">
            Filho com `absolute`
          </div>
        </div>
      </section>

      {/* FIXED */}
      <section>
        <h2 className="text-xl font-bold mb-2">🟡 Fixed</h2>
        <div className="relative h-32 bg-gray-100 border">
          <div className="fixed bottom-4 right-4 bg-yellow-400 p-2 shadow-lg">
            Fixado na janela
          </div>
          <p className="p-2">
            Role a página e veja que o elemento permanece fixo
          </p>
        </div>
      </section>

      {/* STICKY */}
      <section>
        <h2 className="text-xl font-bold mb-2">🟣 Sticky</h2>
        <div className="h-64 overflow-y-scroll bg-gray-50 border">
          <div className="sticky top-0 bg-purple-400 p-2 z-10">
            Cabeçalho sticky
          </div>
          <div className="space-y-4 p-4">
            {[...Array(20)].map((_, i) => (
              <p key={i}>Item {i + 1}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
