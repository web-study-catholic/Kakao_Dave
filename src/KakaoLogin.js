import React, { useEffect } from 'react'

const { Kakao } = window

const KakaoLogin = () => {
    const initKakao = () => {
        if (Kakao && !Kakao.isInitialized()) {
            Kakao.init('6dc36b91a0304922dfb9f1533c38f3fe')
        }
    }

    useEffect(() => {
        initKakao()
    }, [])

    const kakaoLoginHandler = () => {
        Kakao.Auth.authorize({
            redirectUri: 'http://localhost:3000/auth',
        })
    }

    return (
        <button onClick={kakaoLoginHandler}>
            카카오 로그인
        </button>
    )
}

export default KakaoLogin
