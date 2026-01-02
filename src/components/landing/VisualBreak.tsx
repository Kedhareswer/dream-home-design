const VisualBreak = () => {
  return (
    <div className="w-full h-96 md:h-[600px] relative overflow-hidden bg-neutral-200">
      <img
        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
        alt="Minimalist Interior"
        className="w-full h-full object-cover grayscale opacity-90"
      />
      <div className="absolute inset-0 bg-primary/10" />
    </div>
  );
};

export default VisualBreak;
