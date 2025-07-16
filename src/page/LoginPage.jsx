import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgHero from "../assets/img/bg hero.png";
import ilustrasi from "../assets/img/ilustrasi.png";
import Button from "../components/button/Button";
import Input from "../components/input/Input";

const LoginPage = () => {
    const navigate = useNavigate();
    const [idPengguna, setIdpengguna] = useState("");
    const [kataSandi, setKataSandi] = useState("");

    const handleIdPenggunaChange = (e) => {
        setIdpengguna(e.target.value);
    };
    const handleKataSandiChange = (e) => {
        setKataSandi(e.target.value);
    };

    const handleClick = () => {
        const payload = {
            username : idPengguna,
            password : kataSandi,
        }
        console.log(payload);
        
        navigate("/dashboard");
    };

    return (
        <div
            className="w-[100vw] min-h-[100vh] bg-[#FF64A0] flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgHero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-9/12 min-h-[calc(100vh-100px)] h-100 flex">
                {/* Side Kiri */}
                <div className="w-1/3 relative h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#FFC8DD] opacity-50 rounded-l-4xl"></div>
                    <img
                        src={ilustrasi}
                        alt="Background Hero"
                        className="relative z-10"
                    />
                </div>
                {/* Side Kanan */}
                <div className="w-2/3 h-full bg-white rounded-r-4xl pt-20 px-20">
                    <h1 className="font-bold mb-10">
                        Masuk{" "}
                        <span className="text-[#FF64A0]">VisData App</span>
                    </h1>
                    <div className="mb-10">
                        <Input
                            value={idPengguna}
                            label="ID Pengguna/Email"
                            placeholder="Masukkan ID Pengguna/Email Anda"
                            onChange={handleIdPenggunaChange}
                        />
                        <Input
                            value={kataSandi}
                            type="password"
                            label="Kata Sandi"
                            placeholder="Masukkan Kata Sandi Anda"
                            onChange={handleKataSandiChange}
                        />
                    </div>
                    <Button
                        text="Masuk"
                        onClick={handleClick}
                        color="bg-[#FF64A0]"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
