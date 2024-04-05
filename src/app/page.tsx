import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div >
        <h1 className="userh1">User</h1>
        <div className="sec-call">

          <div className="user">
            <Image
              src="/user.png"
              width={400}
              height={300}
              alt="user"
            />
            <p>User Porfile</p>
          </div>
          <div className="dail">
            <button>
              <a href="/userai">
                <Image
                  src="/callphone.png"
                  width={20}
                  height={20}
                  alt="dail"
                />
                Dail Here
              </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
