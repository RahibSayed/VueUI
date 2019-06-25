export default [
{
    "total": 27,
    "resources": [
        {
            "category": "report",
            "defunct": false,
            "description": "Exports list of infoset data objects to a CSV file",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "type": "export:nodes",
                "format": "csv"
            },
            "type": "export:nodes",
            "id": "00000000-0000-0000-0000-000000001000",
            "name": "CSV Infoset Data Object Export"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Exports list of exception objects to a CSV file",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "type": "export:exceptions",
                "format": "csv"
            },
            "type": "export:exceptions",
            "id": "00000000-0000-0000-0000-000000001001",
            "name": "CSV Exception List Export"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Describes how data is distributed across your organization.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "export_type": "pdf",
                "type": "report",
                "template": "data_topology.rptdesign"
            },
            "type": "report",
            "id": "00000000-0000-0000-0000-000000001002",
            "name": "Data Topology Report"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Lists data assessment for IT policies.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "export_type": "pdf",
                "type": "report",
                "template": "data_assessment.rptdesign"
            },
            "type": "report",
            "id": "00000000-0000-0000-0000-000000001003",
            "name": "Data Assessment Report"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Inspect data for compliance with governance policies.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "export_type": "pdf",
                "type": "report",
                "template": "compliance.rptdesign"
            },
            "type": "report",
            "id": "00000000-0000-0000-0000-000000001004",
            "name": "Compliance Report"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Compare responsiveness for various overlays.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "export_type": "pdf",
                "type": "report",
                "template": "overlay_hit.rptdesign"
            },
            "type": "report",
            "id": "00000000-0000-0000-0000-000000001005",
            "name": "Overlay Hit Report"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Identifies duplicate objects contained within an infoset.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "export_type": "excel",
                "type": "report",
                "template": "dedup_excel.rptdesign"
            },
            "type": "report",
            "id": "00000000-0000-0000-0000-000000001006",
            "name": "Duplication Summary Report"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Generates a unified audit log summary for an action run on a specific infoset.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": true,
            "action": {
                "export_type": "pdf",
                "type": "report",
                "template": "audit_summary.rptdesign"
            },
            "type": "report",
            "id": "00000000-0000-0000-0000-000000001007",
            "name": "Audit Summary Report"
        },
        {
            "category": "action",
            "defunct": false,
            "description": "Executes the step-up snippet action on an infoset.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "type": "stepup:snippet"
            },
            "type": "stepup:snippet",
            "id": "4a816a0c-eb07-4753-b95b-abe171141663",
            "name": "Step-up Snippet"
        },
        {
            "category": "action",
            "defunct": false,
            "description": "Executes the step-up full-text action on an infoset.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "type": "stepup:fulltext"
            },
            "type": "stepup:fulltext",
            "id": "25a20c1a-5a48-46b8-ae6d-fa3da8f6e7ee",
            "name": "Step-up Full-Text"
        },
        {
            "category": "action",
            "defunct": false,
            "description": "Delete data objects on an infoset.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": true,
            "action": {
                "ignore_accessed_objects": false,
                "type": "delete"
            },
            "type": "delete",
            "id": "a79fd8e0-071c-4a56-9bd0-07fdcae38af2",
            "name": "Delete Infoset Data Objects"
        },
        {
            "category": "harvest",
            "defunct": false,
            "description": "Harvest Action",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": true,
            "action": {
                "type": "harvest"
            },
            "type": "harvest",
            "id": "0e81b7dc-4c09-4d98-843c-67481e26ae8f",
            "name": "Harvest"
        },
        {
            "category": "enhancement",
            "defunct": false,
            "description": "Executes the step-up cube action on an infoset.",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": true,
            "action": {
                "type": "stepup:cube"
            },
            "type": "stepup:cube",
            "id": "7e169bed-58b2-45a2-9c89-472f22f0fc8e",
            "name": "Step-up Cube"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Report hit statistics for multiple terms on an infoset",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "export_type": "pdf",
                "type": "report",
                "template": "termhit.rptdesign"
            },
            "type": "report",
            "id": "00000000-0000-0000-0000-000000001008",
            "name": "Term Hit Report"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Exports list of infoset data objects to a Content Collector Manifest File",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "type": "export:iccmanifest",
                "format": "csv"
            },
            "type": "export:iccmanifest",
            "id": "00000000-0000-0000-0000-000000001009",
            "name": "Content Collector Manifest File CSV Export"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Exports list of all audited objects to a CSV file",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "type": "export:allauditobjects",
                "format": "csv"
            },
            "type": "export:allauditobjects",
            "id": "00000000-0000-0000-0000-000000001010",
            "name": "CSV All Audited Objects Export"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Exports a summary of attribute counts for the InfoSet to a CSV",
            "designation": null,
            "created": "2017-03-23T11:24:51Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "type": "export:attributes",
                "format": "csv"
            },
            "type": "export:attributes",
            "id": "00000000-0000-0000-0000-000000001011",
            "name": "CSV Attribute Summary"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "",
            "designation": null,
            "created": "2017-05-25T14:42:53Z",
            "creator": "f1d45e79-d549-41b1-a8f2-3e5c3446e3a1",
            "modified": "2017-05-25T14:42:53Z",
            "is_service": false,
            "action": {
                "type": "export:customattributes",
                "columns": [
                    {
                        "/Library/Attributes/Data object properties/Base file location": [
                            "Base file location",
                            "object_metadata"
                        ]
                    }
                ]
            },
            "type": "export:customattributes",
            "id": "77b2c41e-2b72-458a-aba0-0df670801607",
            "name": "Custom CSV Export"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "",
            "designation": null,
            "created": "2017-06-07T14:08:26Z",
            "creator": "f1d45e79-d549-41b1-a8f2-3e5c3446e3a1",
            "modified": "2017-06-07T14:08:26Z",
            "is_service": false,
            "action": {
                "type": "export:customattributes",
                "columns": [
                    {
                        "/Library/Attributes/Data object properties/Base file location": [
                            "Base file location",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/Author": [
                            "Author",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/Bytes": [
                            "Bytes",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/Container": [
                            "Container",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/CreatedOn": [
                            "CreatedOn",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/date": [
                            "date",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/DateCreated": [
                            "DateCreated",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/DocName": [
                            "DocName",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/Last-Modified": [
                            "Last-Modified",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/Last Updated": [
                            "Last Updated",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/LastUpdated": [
                            "LastUpdated",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/Location": [
                            "Location",
                            "object_metadata"
                        ]
                    },
                    {
                        "/Library/Attributes/Data object properties/Title": [
                            "Title",
                            "object_metadata"
                        ]
                    }
                ]
            },
            "type": "export:customattributes",
            "id": "da4977b7-2238-4817-b8fc-8f015fe754dd",
            "name": "Files for"
        },
        {
            "category": "action",
            "defunct": false,
            "description": "BankAccountNumber,PhoneNumber,EmailAddress,PassportNumber,NationalIdNumber,IPAddress,",
            "designation": null,
            "created": "2017-08-21T15:30:20Z",
            "creator": "f1d45e79-d549-41b1-a8f2-3e5c3446e3a1",
            "modified": "2017-08-21T15:30:20Z",
            "is_service": false,
            "action": {
                "type": "stepup:analytics",
                "cartridge_ids": [
                    "710a41e6-1130-450c-b22a-bad1c9e5d6df"
                ]
            },
            "type": "stepup:analytics",
            "id": "6c06dd7a-84b0-4796-8a8c-90518adce468",
            "name": "Step-up Analytics - Basic"
        },
        {
            "category": "action",
            "defunct": false,
            "description": "Step-up Analytics - Advanced - Date,Person,Address,PhoneNumber,Organization,Location, en,de,fr,es,zh,jp",
            "designation": null,
            "created": "2017-08-21T15:31:33Z",
            "creator": "f1d45e79-d549-41b1-a8f2-3e5c3446e3a1",
            "modified": "2017-08-21T15:31:33Z",
            "is_service": false,
            "action": {
                "type": "stepup:analytics",
                "cartridge_ids": [
                    "bc7073cd-7205-4638-8241-acabd8c6f8a9"
                ]
            },
            "type": "stepup:analytics",
            "id": "39f4755c-f434-4122-9f9f-fb6a693041bf",
            "name": "Step-up Analytics - Advanced"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "PPP_Retention_Report",
            "designation": null,
            "created": "2018-02-01T15:56:20Z",
            "creator": "ee7aae15-1d0d-44e1-81d6-2176c58d1c6f",
            "modified": "2018-02-01T15:56:20Z",
            "is_service": false,
            "action": {
                "type": "export:customattributes",
                "columns": [
                    {
                        "/Library/Attributes/System metadata/Volume": [
                            "Volume",
                            "volumeid"
                        ]
                    },
                    {
                        "/Library/Attributes/System metadata/Size": [
                            "Size",
                            "size"
                        ]
                    },
                    {
                        "/Library/Attributes/System metadata/Container path": [
                            "Container path",
                            "containerpath"
                        ]
                    }
                ]
            },
            "type": "export:customattributes",
            "id": "3f6522f1-8fd9-42eb-810d-35c2009f596f",
            "name": "PPP_Retention_Report Copy"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "PPP_Retention_Report",
            "designation": null,
            "created": "2018-01-12T12:27:13Z",
            "creator": "ee7aae15-1d0d-44e1-81d6-2176c58d1c6f",
            "modified": "2018-01-12T12:27:13Z",
            "is_service": false,
            "action": {
                "type": "export:customattributes",
                "columns": [
                    {
                        "/Library/Attributes/System metadata/Object name": [
                            "Object name",
                            "objectname"
                        ]
                    },
                    {
                        "/Library/Attributes/System metadata/Container path": [
                            "Container path",
                            "containerpath"
                        ]
                    },
                    {
                        "/Library/Attributes/System metadata/System path": [
                            "System path",
                            "path"
                        ]
                    },
                    {
                        "/Library/Attributes/System metadata/Volume": [
                            "Volume",
                            "volumeid"
                        ]
                    },
                    {
                        "/Library/Attributes/System metadata/Size": [
                            "Size",
                            "size"
                        ]
                    }
                ]
            },
            "type": "export:customattributes",
            "id": "bed8a1f7-6437-4b03-8af3-cee745de564d",
            "name": "PPP_Retention_Report"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Exports details about term hits for cartridge and other terms to a CSV file",
            "designation": null,
            "created": "2018-04-17T09:15:21Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "type": "export:cartridgereport",
                "format": "csv"
            },
            "type": "export:cartridgereport",
            "id": "00000000-0000-0000-0000-000000001012",
            "name": "CSV Term Hit Details Export"
        },
        {
            "category": "action",
            "defunct": false,
            "description": "Move data to \"StoredIQ\"",
            "designation": null,
            "created": "2017-06-26T13:34:50Z",
            "creator": "f1d45e79-d549-41b1-a8f2-3e5c3446e3a1",
            "modified": "2018-06-29T09:23:32Z",
            "is_service": false,
            "action": {
                "destination_path": "StoredIQ",
                "targetset_name": "ipmo",
                "targetset_id": "d5ca7121-390c-4c33-b9ae-60574d633f77",
                "migrate_security_attributes": "all",
                "type": "move:plain",
                "recreate_directory_structure": true,
                "targetset_protocol": "cifs"
            },
            "type": "move:plain",
            "id": "7d17639e-6356-4c2c-8851-edf07db6c131",
            "name": "Move data objects CAUTION"
        },
        {
            "category": "action",
            "defunct": false,
            "description": "",
            "designation": null,
            "created": "2018-06-08T08:33:29Z",
            "creator": "0d5fc9d6-84da-46b9-a9ad-409d0984de26",
            "modified": "2018-06-22T14:06:23Z",
            "is_service": false,
            "action": {
                "compute_hash_value": false,
                "copy_sharepoint_userprofile_wikis": false,
                "email_item_disposition": "msg",
                "targetset_id": "98a5208c-39a7-4d85-a96d-fcda9f03b10f",
                "sharepoint_versions": "responsive",
                "copy_sharepoint_userprofile_libraries": false,
                "targetset_protocol": "cifs",
                "copy_sharepoint_userprofile_posts": false,
                "force_full_copy": false,
                "no_auto_harvest": false,
                "sharepoint_disposition": "responsive",
                "copy_sharepoint_userprofile_notes": false,
                "preserve_version_chains": false,
                "type": "copy:plain",
                "recreate_directory_structure": true,
                "email_archive_disposition": "responsive",
                "destination_path": "SIQMOVE TEST",
                "file_archive_disposition": "responsive",
                "copy_modified_objects": false,
                "segregate_by_source_volume": false,
                "copy_sharepoint_userprofile_misc": false,
                "targetset_name": "Ins Move Test 2206",
                "preserve_permissions": false,
                "migrate_security_attributes": "none",
                "preserve_owners": false
            },
            "type": "copy:plain",
            "id": "7c563225-ec1b-4198-8c73-7f19a9b4d70e",
            "name": "RS COPY ACTION"
        },
        {
            "category": "report",
            "defunct": false,
            "description": "Shows the distribution of sensitive data based on sensitivity level",
            "designation": null,
            "created": "2018-09-11T10:02:07Z",
            "creator": null,
            "modified": null,
            "is_service": false,
            "action": {
                "export_type": "pdf",
                "type": "report",
                "template": "sensitiveinfosummary.rptdesign"
            },
            "type": "report",
            "id": "00000000-0000-0000-0000-000000001013",
            "name": "Data Privacy Report Card"
        }
    ]
    }
]