const mockUrls = [
  "https://utfs.io/f/62tumwn3V7UZef9R5htbXdEVNofQyzPqDiB4Z1pJKGxMulAj",
  "https://utfs.io/f/62tumwn3V7UZXoD5lSsi1T8aWmB5Ls9ngYtIbOeJp6MVoPQj",
  "https://utfs.io/f/62tumwn3V7UZuujfAQmKghQJXMmjE563YU2k9PFnp0ZbsaAV",
  "https://utfs.io/f/62tumwn3V7UZelfFr3tbXdEVNofQyzPqDiB4Z1pJKGxMulAj",
  "https://utfs.io/f/62tumwn3V7UZ36tAvdID0zosWPFm92LOH7YQZcjTwiKrfpvJ",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
