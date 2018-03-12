using System;
using System.IO;
using System.Text;

namespace RemoveHeadComments
{
    class Program
    {
        static string ReadFile(string strFile)
        {
            StringBuilder strb = new StringBuilder();
            try
            {
                bool bHeader = true;
                bool bInComment = false;
                StreamReader sr = new StreamReader(strFile, Encoding.Default);
                String line;
                while ((line = sr.ReadLine()) != null)
                {
                    if (bHeader)
                    {
                        if (line.StartsWith("/*"))
                        {
                            bInComment = true;
                            continue;
                        }

                        if (bInComment)
                        {
                            if (line.StartsWith("*/"))
                            {
                                bInComment = false;
                                bHeader = false;
                            }
                            continue;
                        }
                    }

                    strb.AppendLine(line);
                }
            }
            catch (IOException e)
            {
            }

            return strb.ToString();
        }

        static void AppendFile(string strFile, string content)
        {
            byte[] myByte = System.Text.Encoding.UTF8.GetBytes(content);
            using (FileStream fsWrite = new FileStream(strFile, FileMode.Append))
            {
                fsWrite.Write(myByte, 0, myByte.Length);
            };

        }
        static void Main(string[] args)
        {
            if (args.Length == 3)
            {
                string a1 = "dynamsoft.webtwain.initiate.js";
                string a2 = "dynamsoft.webtwain.addon.pdf.js";
                string a3 = "dynamsoft.webtwain.config.js";
                string outFile = "src.js";

                File.Delete(outFile);

                AppendFile(outFile, ReadFile(a1));
                AppendFile(outFile, ReadFile(a2));
                AppendFile(outFile, ReadFile(a3));

                Console.WriteLine(a1);
                Console.WriteLine(a2);
                Console.WriteLine(a3);
            }
        }
    }
}
