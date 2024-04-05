import Image from "next/image";

export default function Userai() {
    return (
        <main className="">
            <div >
                <h1 className="userh1">User + AI</h1>
                <div className="chatde">

                <div className="chat1">
                    <div className="chat-container">
                        <header className="chat-header">
                            <h1>Notes Screen</h1>
                        </header>
                        <main className="chat-messages">
                            <p>
                                Typing..
                            </p>
                        </main>
                        <main className="chat-messages">
                            <p>
                                Typing..
                            </p>
                        </main><main className="chat-messages">
                            <p>
                                Typing..
                            </p>
                        </main><main className="chat-messages">
                            <p>
                                Typing..
                            </p>
                        </main><main className="chat-messages">
                            <p>
                                Typing..
                            </p>
                        </main>

                        <footer className="chat-input">
                            <input type="text" placeholder="Type your message..." id="message-input" />
                            <button id="send-button">Send</button>
                        </footer>
                    </div>
                    <div className="end">
                        <button>
                            <a href="/">
                                <Image
                                    src="/callphone.png"
                                    width={20}
                                    height={20}
                                    alt="dail"
                                />
                                End Here
                            </a>
                        </button>
                    </div>
                </div>
                <div className="bg-black dt">
                    <div className="user">

                        <Image
                            src="/user.png"
                            width={80}
                            height={80}
                            alt="dail"
                        />
                    </div>
                        <p className="text-white text-center">Speaking</p>
                    <div className="user">

                        <Image
                            src="/robot.png"
                            width={80}
                            height={80}
                            alt="dail"
                        />
                    </div>
                        <p className="text-white text-center">Listening</p>
                </div>
                </div>

            </div>
        </main>
    );
}
