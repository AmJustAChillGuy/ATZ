import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const ErrorPage = ({ code, message }) => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{code} | AsTrazu</title>
            </Head>

            <div className="max-w-7xl text-center py-20 mx-auto">
                <div className="flex w-full justify-center">
                    <img width="400" src="/img/error.png" alt="Error Image" />
                </div>
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">{code}</h1>
                <p className="text-lg font-light text-white/70 mt-2">{message}</p>
                
                <button
                    className="mt-4 px-6 py-2 font-medium text-zinc-900 bg-amber-400 rounded-xl shadow-lg hover:bg-opacity-50 transition duration-200"
                    onClick={() => {
                        setClicked(true);
                        router.back();
                    }}
                >
                    {clicked ? (
                        <i className="fad fa-spinner-third fa-spin text-white" />
                    ) : (
                        <>
                            <i className="fa fa-arrow-left mr-2" />
                            Take Me Back
                        </>
                    )}
                </button>
            </div>
        </>
    );
};

export default ErrorPage;
