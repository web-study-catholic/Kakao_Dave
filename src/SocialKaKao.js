import React, { useState } from "react";
import KakaoLogin from "react-kakao-login";
import axios from "axios";

const SocialKaKao = () => {
    const kakaoClientId = "6dc36b91a0304922dfb9f1533c38f3fe";
    const [userInfo, setUserInfo] = useState(null);

    const getKaKaoUserData = async (token) => {
        const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        return response.data;

    };

    const kakaoOnSuccess = async (response) => {
        console.log(response);
        const access_token = response.response.access_token;

        // 사용자 계정 정보 가져오기
        try {
            const userData = await getKaKaoUserData(access_token);
            console.log(userData);
            setUserInfo(userData);
        } catch (error) {
            console.log(error);
        }
    };

    const kakaoOnFailure = (error) => {
        console.log(error);
    };

    return (
        <>
            <KakaoLogin
                token={kakaoClientId}
                onSuccess={kakaoOnSuccess}
                onFailure={kakaoOnFailure}
            />
            {userInfo && (
                <div>
                    <h2>사용자 정보</h2>
                    <p>이름: {userInfo.kakao_account.profile.nickname}</p>
                </div>
            )}
        </>
    );
};

export default SocialKaKao;
