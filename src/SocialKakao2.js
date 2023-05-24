const SocialKakao2 = () => {
    const Rest_api_key = '515cba137caa1770a01d37162c2e2530'
    const redirect_uri = 'http://localhost:3000/auth'

    const KaKaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}${redirect_uri}&response_type=code`
    const handleLogin = () => {
        window.location.href = KaKaoURL
    }
    return (
        <>
            <button onClick={handleLogin}>카카오 로그인</button>
        </>
    )
}
export default SocialKakao2
