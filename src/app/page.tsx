import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    // "https://utfs.io/f/3f29b983-f5a1-4304-9549-7299877d9103-dcyjsu.jpg",
    // "https://utfs.io/f/54e7fa84-d70a-4138-9a32-eac4ff4630aa-9listx.jpg",
    // "https://utfs.io/f/a262a973-6b2b-4bf6-bfa0-9af248d91798-5rp48z.jpg",
    // "https://utfs.io/f/25678b3d-e841-4c9a-83d5-8bfac66cb8c7-sdaqri.jpg",
    "https://utfs.io/f/194d76cf-49ce-42ed-9be6-9eb0499124b8-jtpd5r.jpg",
    // "https://utfs.io/f/372a40f1-dcd2-41a6-9df6-6d84f0e7fb87-ippd3m.jpg",
    // "https://utfs.io/f/3ded1838-32f0-4005-ad22-ca11819313ff-ycdb1y.jpg",
    // "https://utfs.io/f/d03ea99a-4406-47f2-b81d-7b5c420a7751-nf1wrr.jpg",
    // "https://utfs.io/f/c5511492-ef33-4f3c-959e-16d771e8735e-7t1rmi.jpg",
    // "https://utfs.io/f/acd0625a-98c3-4ad7-9c57-5d3ba0033c1a-kzk8t2.jpg",
  ];

  type mockImage = {
    id: number;
    url: string;
  };

  const mockImages: mockImage[] = mockUrls.map((url, index) => {
    return {
      id: index + 1,
      url,
    };
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => {
          return (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image"></img>
            </div>
          )
        })}
      </div>
    </main>
  );
}
