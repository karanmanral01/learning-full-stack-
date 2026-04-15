const reels = [
    {
        username: "sarthak.sharma",
        likeCount: 1280,
        isLiked: false,
        commentCount: 94,
        caption: "E-commerce is evolving faster than ever 🚀",
        video: "./reels/video1.mp4",
        userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        shareCount: 56,
        isFollowed: false
    },
    {
        username: "karan.codes",
        likeCount: 2430,
        isLiked: true,
        commentCount: 178,
        caption: "Built this reels UI using pure JavaScript and DOM 🔥",
        video: "./reels/video2.mp4",
        userprofile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
        shareCount: 120,
        isFollowed: true
    },
    {
        username: "frontend.dev",
        likeCount: 1890,
        isLiked: false,
        commentCount: 132,
        caption: "CSS snapping makes reels feel so smooth 😍",
        video: "./reels/video3.mp4",
        userprofile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200",
        shareCount: 88,
        isFollowed: false
    },
    {
        username: "travel.with.me",
        likeCount: 5320,
        isLiked: true,
        commentCount: 420,
        caption: "Sunsets, roads and endless memories 🌅",
        video: "./reels/video4.mp4",
        userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        shareCount: 260,
        isFollowed: true
    },
    {
        username: "fitness.zone",
        likeCount: 3170,
        isLiked: false,
        commentCount: 201,
        caption: "Stay disciplined, results will follow 💪",
        video: "./reels/video5.mp4",
        userprofile: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=200",
        shareCount: 144,
        isFollowed: false
    },
    {
        username: "foodie.diaries",
        likeCount: 2760,
        isLiked: true,
        commentCount: 189,
        caption: "Best momos spot in Delhi 😋",
        video: "./reels/video6.mp4",
        userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
        shareCount: 135,
        isFollowed: true
    },
    {
        username: "music.vibes",
        likeCount: 4480,
        isLiked: false,
        commentCount: 350,
        caption: "Late night coding with lo-fi beats 🎧",
        video: "./reels/video7.mp4",
        userprofile: "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=200",
        shareCount: 280,
        isFollowed: false
    },
    {
        username: "nature.clicks",
        likeCount: 3650,
        isLiked: true,
        commentCount: 240,
        caption: "Rainy forest vibes are unmatched 🌧️🌿",
        video: "./reels/video8.mp4",
        userprofile: "https://images.unsplash.com/photo-1542204625-de293a2f8ff0?w=200",
        shareCount: 198,
        isFollowed: true
    },
    {
        username: "tech.guru",
        likeCount: 6210,
        isLiked: false,
        commentCount: 540,
        caption: "AI + Web Dev is the future 🤖",
        video: "./reels/video9.mp4",
        userprofile: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200",
        shareCount: 410,
        isFollowed: false
    },
    {
        username: "daily.motivation",
        likeCount: 2890,
        isLiked: true,
        commentCount: 165,
        caption: "Small steps every day lead to big success ✨",
        video: "./reels/video10.mp4",
        userprofile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
        shareCount: 150,
        isFollowed: true
    }
];

var allReels = document.querySelector('.all-reels');

function addData() {
    var sum = ''

    reels.forEach(function (elem, idx) {
        sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button id = ${idx} class = "follow">${elem.isFollowed ? 'Unfollow' : 'follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id = ${idx} class="like">
                            <h4 .class="like-icon">${elem.isLiked ? '<i class="ri-heart-3-line"></i>' : '<i class="ri-heart-3-fill"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 .class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 .class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 .class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div> `
    });

    allReels.innerHTML = sum

}

addData();

allReels.addEventListener('click', function (dets) {
    if (dets.target.className == 'like') {
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true
        } else {
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false
        }
    }

    if (dets.target.className == 'follow') {
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true
        } else {
            reels[dets.target.id].isFollowed = false
        }
    }

    addData()
})
