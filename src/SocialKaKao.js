import React, {useEffect, useState} from "react";
import KakaoLogin from "react-kakao-login";
import axios from "axios";

const SocialKaKao = () => {
    const kakaoClientId = "6dc36b91a0304922dfb9f1533c38f3fe";
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        autoLogin();
    }, []);

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

    const autoLogin = () => {
        // const storedToken = localStorage.getItem('authToken');
        const storedToken = '1234abc';
        // if (userInfo?.kakao_account?.profile?.nickname === '김원준' && storedToken === '1234abc') {
        if (storedToken === '1234abc') {
            console.log('Automatically logged in');
            alert('자동로그인 되었습니다');
        } else {
            console.log('Token is not valid');
        }
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
                        <img
                            src={userInfo.kakao_account.profile.profile_image_url}
                            alt="프로필 사진 대체"
                        />
                </div>
            )}
        </>
    );
};

export default SocialKaKao;
