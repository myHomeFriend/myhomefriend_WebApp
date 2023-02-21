interface IBreadCrumbJson {
  text: string;
  url: string;
  urlType: string;
}

export interface IBreadCrumbData {
  breadCrumbs: IBreadCrumbJson[];
  urlType: string | undefined;
}

enum urlTypes {
  "home",
  "c",
  "s",
  "pt",
}

export function useCreateBrumbCrumJson(path: string): IBreadCrumbData {
  const pathArray = path.split("/");
  let breadCrumbData: IBreadCrumbData = {
    breadCrumbs: [],
    urlType: "",
  };
  let breadCrumbJson: IBreadCrumbJson[] = [];
  switch (pathArray.at(-1)) {
    case "c":
      for (let index = 0; index < pathArray.length - 1; index++) {
        const element = pathArray[index];
        let breadCrumb: IBreadCrumbJson = {
          text: "",
          url: "",
          urlType: "",
        };
        if (element === "") {
          breadCrumb.text = "Home";
          breadCrumb.url = "/";
          breadCrumb.urlType = urlTypes[index];
        } else {
          breadCrumb.text = convertFirtLetterintoUpperCase(element);
          breadCrumb.url = getPrevUrl(index, pathArray);
          breadCrumb.urlType = urlTypes[index];
        }
        breadCrumbJson.push(breadCrumb);
      }
      break;
    case "s":
      for (let index = 0; index < pathArray.length - 1; index++) {
        const element = pathArray[index];
        let breadCrumb: IBreadCrumbJson = {
          text: "",
          url: "",
          urlType: "",
        };
        if (element === "") {
          breadCrumb.text = "Home";
          breadCrumb.url = "/";
          breadCrumb.urlType = urlTypes[index];
        } else {
          breadCrumb.text = convertFirtLetterintoUpperCase(element);
          breadCrumb.url = getPrevUrl(index, pathArray);
          breadCrumb.urlType = urlTypes[index];
        }
        breadCrumbJson.push(breadCrumb);
      }
      break;
    case "pt":
      for (let index = 0; index < pathArray.length - 1; index++) {
        const element = pathArray[index];
        let breadCrumb: IBreadCrumbJson = {
          text: "",
          url: "",
          urlType: "",
        };
        if (element === "") {
          breadCrumb.text = "Home";
          breadCrumb.url = "/";
          breadCrumb.urlType = urlTypes[index];
        } else {
          breadCrumb.text = convertFirtLetterintoUpperCase(element);
          breadCrumb.url = getPrevUrl(index, pathArray);
          breadCrumb.urlType = urlTypes[index];
        }
        breadCrumbJson.push(breadCrumb);
      }
      break;
  }

  breadCrumbData.breadCrumbs = breadCrumbJson;
  breadCrumbData.urlType = pathArray.at(-1);

  return breadCrumbData;
}

function convertFirtLetterintoUpperCase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getPrevUrl(index: number, pathArray: string[]) {
  const filterArray = pathArray.slice(1, index + 1);
  let urlPath: string = "";
  filterArray.forEach((element) => {
    urlPath = urlPath + "/" + element;
  });
  return urlPath;
}
