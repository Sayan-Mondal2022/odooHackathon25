const USER_IS_LOGGED_IN = true; // simulate login

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".answer").forEach((answer) => {
    const upvoteBtn = answer.querySelector(".upvote");
    const downvoteBtn = answer.querySelector(".downvote");
    const voteCount = answer.querySelector(".vote span");

    // Track vote status: null, 'upvoted', or 'downvoted'
    let voteStatus = null;

    upvoteBtn.addEventListener("click", () => {
      if (!USER_IS_LOGGED_IN) {
        alert("⚠️ Please log in to vote.");
        return;
      }

      let count = parseInt(voteCount.textContent);

      if (voteStatus === "upvoted") {
        // Undo upvote
        voteCount.textContent = count - 1;
        voteStatus = null;
      } else if (voteStatus === "downvoted") {
        // Switch from downvote to upvote
        voteCount.textContent = count + 2;
        voteStatus = "upvoted";
      } else {
        // New upvote
        voteCount.textContent = count + 1;
        voteStatus = "upvoted";
      }
    });

    downvoteBtn.addEventListener("click", () => {
      if (!USER_IS_LOGGED_IN) {
        alert("⚠️ Please log in to vote.");
        return;
      }

      let count = parseInt(voteCount.textContent);

      if (voteStatus === "downvoted") {
        // Undo downvote
        voteCount.textContent = count + 1;
        voteStatus = null;
      } else if (voteStatus === "upvoted") {
        // Switch from upvote to downvote
        voteCount.textContent = count - 2;
        voteStatus = "downvoted";
      } else {
        // New downvote
        voteCount.textContent = count - 1;
        voteStatus = "downvoted";
      }
    });
  });
});
