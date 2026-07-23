function HeroImage() {
  return (
    <div className="flex justify-center">
      <div className="flex h-96 w-96 items-center justify-center rounded-full border-4 border-blue-500/30 bg-slate-900 shadow-2xl">
        <span className="text-slate-500 text-lg">
          Your Photo
        </span>
      </div>
    </div>
  );
}

export default HeroImage;