const storage = getStorage(app);
      const upload = () => {
        const name = new Date().getTime() + data.file[0].name;
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef,data.file[0]);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log(downloadURL)
              data.toolScreenshot=downloadURL;
            });
          }
        );
      };