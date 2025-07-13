import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { renderElements } from "@/utils";
import { RegulationList } from "./RegulationList";

export const RuleList = () => {
  type RuleGroupType = {
    id: string;
    title: string;
    rules: RuleType[];
  };

  type RuleType = {
    id: string;
    text: string;
  };

  const ruleGroup: RuleGroupType[] = [
    {
      id: "rule-1",
      title: "Kehadiran dan Ketepatan Waktu",
      rules: [
        {
          id: "1",
          text: "Setiap peserta wajib hadir dan tepat waktu dalam seluruh kegiatan KKN, seperti program kerja, piket, rapat, dan lain-lain.",
        },
        {
          id: "2",
          text: "Keterlambatan lebih dari 15 menit akan dikenai sanksi berupa denda.",
        },
        {
          id: "3",
          text: "Ketidakhadiran tanpa keterangan yang jelas akan dianggap sebagai pelanggaran dan dikenai denda sesuai ketentuan yang berlaku.",
        },
      ],
    },
    {
      id: "rule-2",
      title: "Piket dan Kebersihan",
      rules: [
        {
          id: "1",
          text: "Peserta wajib mengikuti jadwal piket sesuai dengan pembagian yang telah ditentukan.",
        },
        {
          id: "2",
          text: "Peserta piket bertanggung jawab atas kebersihan dan kerapian lingkungan posko KKN.",
        },
        {
          id: "3",
          text: "Ketidakhadiran saat jadwal piket akan dikenai sanksi berupa denda.",
        },
      ],
    },
    {
      id: "rule-3",
      title: "Partisipasi dalam Program Kerja",
      rules: [
        {
          id: "1",
          text: "Setiap peserta wajib mengikuti serta berkontribusi secara aktif dalam pelaksanaan program kerja KKN.",
        },
        {
          id: "2",
          text: "Ketidakhadiran tanpa alasan yang jelas akan dikenai sanksi sesuai kebijakan yang berlaku.",
        },
      ],
    },
    {
      id: "rule-4",
      title: "Etika dan Perilaku",
      rules: [
        {
          id: "1",
          text: "Peserta wajib menjaga sikap dan tutur kata selama berada di lingkungan masyarakat.",
        },
        {
          id: "2",
          text: "Dilarang membuat kegaduhan, mengonsumsi minuman keras, merokok di area terlarang, atau melakukan tindakan lain yang dapat mencemarkan nama baik institusi.",
        },
        {
          id: "3",
          text: "Peserta wajib menjaga sopan santun terhadap warga dan perangkat desa.",
        },
      ],
    },
    {
      id: "rule-5",
      title: "Kedisiplinan Administratif",
      rules: [
        {
          id: "1",
          text: "Setiap bentuk ketidakhadiran wajib dilaporkan kepada koordinator atau penanggung jawab (PJ) kegiatan.",
        },
        {
          id: "2",
          text: "Peserta wajib mengumpulkan laporan dan tugas sesuai dengan batas waktu yang telah ditentukan.",
        },
      ],
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {renderElements({
        of: ruleGroup,
        keyExtractor: (ruleItem) => ruleItem.id,
        render: (ruleItem) => {
          return (
            <AccordionItem value={ruleItem.id}>
              <AccordionTrigger>{ruleItem.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {renderElements({
                  of: ruleItem.rules,
                  keyExtractor: (rule) => rule?.id,
                  render: (rule) => {
                    return <p className="indent-1">• {rule?.text}</p>;
                  },
                })}
              </AccordionContent>
            </AccordionItem>
          );
        },
      })}
      <AccordionItem value="item-1">
        <AccordionTrigger>Ketentuan Denda</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <RegulationList />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
