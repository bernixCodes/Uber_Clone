import Head from "next/head";
import Map from "../components/Map";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Uber</title>
        <meta name="description" content="Uber Clone" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="flex flex-col  h-screen">
        <Map />
        <div className="flex-1 p-5">
          {/* Header */}
          <div className="flex justify-between items-center">
            <Image src="/uber.png" width={80} height={80} />
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium">Bernie Adjoa</p>
              <Image
                src="/b.jpg"
                width={46}
                height={42}
                className="rounded-full object-contain "
              />
            </div>
          </div>
          {/* Action Btns */}
          <div className="flex items-center py-3 gap-5 cursor-pointer text-xl font-semibold ">
            <div className="bg-gray-200 flex flex-col flex-1 items-center justify-center rounded-lg transform hover:scale-105 transition-shadow">
              <Link href={"/search"}>
                <Image src="/car.png" width={120} height={120} />
                <p className="pb-2"> Ride</p>
              </Link>
            </div>
            <div className="bg-gray-200 flex flex-col flex-1 items-center justify-center rounded-lg transform hover:scale-105 transition-shadow">
              <Image src="/bike.png" width={120} height={120} />

              <p className="pb-2"> Wheels</p>
            </div>
            <div className="bg-gray-200 flex flex-col flex-1 items-center justify-center rounded-lg transform hover:scale-105 transition-shadow">
              <Image src="/uberschedule.png" width={120} height={120} />

              <p className="pb-2"> Reserve</p>
            </div>
          </div>

          {/* Input */}
          <div className="h-20 bg-gray-200 mt-8 flex items-center px-5">
            <input
              placeholder="Where to?"
              className="bg-transparent outline-none w-full placeholder:text-xl placeholder:text-black placeholder:font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
