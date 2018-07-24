//SIDE MENU

export const MENU = {
    home: [
        {
            "title": "Overview",
            "icon": "fa fa-paper-plane",
            "state": 0,
            "route": "/overviews"
        },
        {
            "title": "Draft projects",
            "icon": "fa fa-adjust",
            "state": 0,
            "route": "/drafts"
        }
    ],
    draft:[
        {
            "title": "Basic project data",
            "icon": "fas fa-clipboard",
            "state": 0,
            "route": {root: "/draft", subRoot: "basic-data"},
            "dbname" : "basic_data",
        },
        {
            "title": "Bussines partners",
            "icon": "fas fa-puzzle-piece",
            "state": 0,
            "route": {root: "/draft", subRoot: "partners"},
            "dbname" : "partners",
        },
        {
            "title": "Fixtures",
            "icon": "fas fa-table",
            "state": 0,
            "route": {root: "/draft", subRoot: "fixtures"},
            "dbname" : "fixtures",
        },
        {
            "title": "Visit surveys",
            "icon": "fas fa-tasks",
            "state": 0,
            "route": {root: "/draft", subRoot: "visit_sureveys"},
            "dbname" : "visit_surveys",
        },
        {
            "title": "Visit planning",
            "icon": "fas fa-users",
            "state": 0,
            "route": {root: "/draft", subRoot: "visit_planning"},
            "dbname" : "visit_planning",
        },
        {
            "title": "Quality surveys",
            "icon": "fas fa-certificate",
            "state": 0,
            "route": {root: "/draft", subRoot: "quality_sureveys"},
            "dbname" : "quality_surveys",
        },
    ],
    draftNew: [
        {
            "title": "Overview",
            "icon": "fas fa-clipboard",
            "state": 2,
            "route": "/draft/new-project"
        }
    ]
}
