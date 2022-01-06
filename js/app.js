function main() {
  return {
    async shareIt() {
      const response = await fetch("/imgs/newYears.jpg");
      const blob = await response.blob();
      const filesArray = [
        new File([blob], "newYears.jpg", {
          type: "image/jpeg",
          lastModified: new Date().getTime(),
        }),
      ];
      const shareData = {
        title: "ShareIt!",
        text: "Happy New Year!",
        files: filesArray,
      };
      navigator.share(shareData);
    },
  };
}
